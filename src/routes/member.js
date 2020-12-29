const express = require("express");
const mem_router = express.Router();
const Member = require("../models/Member");

//get all members
mem_router.get("/", (req, res) =>
  Member.findAll()
    .then((member) => {
      //console.log(member);
      res.status(200).json(member);
    })
    .catch((err) => console.log(err))
);

//mem_router.get("/", (req, res) => res.json(mem));

//get single member
// mem_router.get("/:id", (req, res) => {
//   const m = Member.filter((m) => m.id === parseInt(req.params.id));
//   if (m.length) res.json(m);
//   else
//     res.status(400).json({ msg: `No member with ${req.params.id} is found` });
// });

//create a member
mem_router.post("/", (req, res) => {
  const sec = new Date().getMilliseconds();
  const newMember = {
    id: sec,
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "name or email is missing" });
  }
  Member.create(newMember)
    .then((mem) => res.redirect("/"))
    .catch((err) => console.log(err));
});

//update a member
// mem_router.put("/:id", (req, res) => {
//   mem.forEach((m) => {
//     if (m.id === parseInt(req.params.id)) {
//       m.name = req.body.name ? req.body.name : m.name;
//       m.email = req.body.email ? req.body.email : m.email;
//       m.status = req.body.status ? req.body.status : m.status;

//       res.json({ msg: "member is updated", m });
//     } else {
//       res.status(400).json({ msg: "member not found" });
//     }
//   });
// });

//delete single member
// mem_router.delete("/:id", (req, res) => {
//   const len = mem.length;
//   const mems = mem.filter((m) => {
//     return m.id !== parseInt(req.params.id);
//   });
//   if (len !== mems.length) res.json(mems);
//   else
//     res.status(400).json({ msg: `No member with ${req.params.id} is found` });
// });
module.exports = mem_router;
