const mongoose = require('mongoose');
const AdminSchema =require('../Models/admin')


exports.getAdmin = async(req,res,next)=>{
    const user = await AdminSchema.find({}).sort({ createdAt: -1 });
    console.log(user);
    res.status(200).json(user);
  }

  exports.createAdmin = async (req, res) => {
    const {name,age,experience,license,busno,cnic} = req.body;
    try {
      const user = await AdminSchema.create({
        
        name,
        age,
        experience,
        license,
        busno,
        cnic
        
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ mssg: error.message });
    }
  };

  exports.deleteRouteDetail = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid ID Format' });
    }
    const RouteDetail = await AdminSchema.findOneAndDelete({ _id: id });

    if (RouteDetail) {

      res.status(200).json(RouteDetail);
    }
    else {
      res.status(404).json({ error: 'No Such Route Exist' });
    }
  }