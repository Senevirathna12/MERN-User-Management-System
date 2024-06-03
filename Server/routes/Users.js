const router = require("express").Router();
let User = require("../models/User");

router.route("/add").post((req, res)=>{
    const { regno, name } = req.body;

    const newUser =  new User({
        regno ,
        name
    })

    newUser.save().then(()=>{
        res.json("User Aded!")
    }).catch((err)=>{
        console.log(err);
    })       

})

router.route("/").get((req,res)=>{
    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const {regno,name} = req.body;

    const updateUser = {
        regno,
        name
    }

    // const updatedUser = await User.findByIdAndUpdate(userId,updateUser).then(()=>{
    //     res.status(200).send({statuse : " User Updated!"});
    // }).catch((err)=>{
    //     console.log(err);
    //     res.status(500).send({statuse : "Error with Updating data"});

    // })

    try {
        await User.findByIdAndUpdate(userId, updateUser); // Use findByIdAndUpdate with userId
        res.status(200).send({ status: "User Updated!" });
      } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with Updating data" });
      }

   

})

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;

    await User.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({statuse : "User Deleted"})
    })
    .catch((err)=>{
        console.log(err.message);
        res.status(500).send({statuse : "Error with delete User", error : err.message})

    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    const user = await User.findById(userId)
        .then((user)=>{
            res.status(200).send({statuse : " User fetched",user});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({statuse: "Error with get user", error : err.message});
        })
})

module.exports = router;