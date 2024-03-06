const Profile = require("../models/profile");

const profile_details = (req, res) => {
  const id = req.params.id;
  Profile.findById(id)
    .then((result) => {
      res.render("profile/details", {
        title: "Profile details",
        profile: result,
      });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Profile not found" });
    });
};

module.exports = {
  profile_details,
};
