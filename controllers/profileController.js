import Profile from "../models/profile.js";

// a controller for handling profile details, return a profile by id
export const profile_details = (req, res) => {
  const id = req.params.id;
  Profile.findById(id)
    .then((result) => {
      res.render("profile/profile_template", {
        title: "Profile details",
        profile: result,
      });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Profile not found" });
    });
};

// a controller for handling creating profiles
export const create_profile = (req, res) => {
  const profile = new Profile(req.body);

  profile
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
