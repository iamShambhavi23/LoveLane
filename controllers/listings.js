const Listing=require("../models/listing.js");
const ExpressError=require('../utils/ExpressError.js');

//Index
module.exports.index = async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
};


//New
module.exports.renderNewForm = async(req,res)=>{
    res.render("./listings/new.ejs");
}

//show
module.exports.showListing = async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id)
    .populate({
        path : "reviews",
        populate : {
            path : "author",
        },
    })
    .populate("owner");
    // console.log(listing);
    if(!listing){
        req.flash("error","The entry you requested for does not exist.");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("./listings/show.ejs",{listing});
};

//create
module.exports.createListing = async(req,res,next)=>{
    let url=req.file.path;
    let filename=req.file.filename;
    // console.log(url, "...", filename);
    const newListing=new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    await newListing.save();
    req.flash("success","A new entry has been added.");
    res.redirect("/listings");
};

//Edit
module.exports.renderEditForm = async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","The entry you requested for does not exist.");
        res.redirect("/listings");
    }
    let originalSnapshotUrl = listing.image.url;
    originalSnapshotUrl=originalSnapshotUrl.replace("/upload","/upload/w_250");
    res.render("./listings/edit.ejs",{listing,originalSnapshotUrl});
};

//Update
module.exports.updateListing = async(req,res)=>{
    let {id}=req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file !== "undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }

    req.flash("success","Entry Updated.");
    res.redirect(`/listings/${id}`);
};

//delete
module.exports.destroy = async(req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Entry Deleted.");
    res.redirect("/listings");
};
//search
module.exports.search=async (req,res,next)=>{

    let countries=req.body.country;
    console.log(countries);
     let data=await Listing.find({country:countries});
     console.log(data);
     if(data.length){
     
     res.render('./listings/search.ejs',{data});
     }
     else{
        throw new ExpressError(404, 'City not found!');
     }
}