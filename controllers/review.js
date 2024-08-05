const Review=require("../models/review.js");
const Listing=require("../models/listing.js");

//Review POST
module.exports.createReview = async(req,res)=>{
    // console.log(req.params.id);
    let listing=await Listing.findById(req.params.id);
    // console.log("Listing found:", listing);
    let newReview=new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);
    
    await newReview.save();
    await listing.save();

    // console.log("New review saved!");
    req.flash("success","A new Review has been added.");
    res.redirect(`/listings/${listing._id}`);
};

//Review Delete
module.exports.destroyReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted.");
    res.redirect(`/listings/${id}`);
};