import UserInfo from "../Schemas/userInfo.schema.js";

export const getUserInfo = async(req, res) => {

    const id = req.user.id;

    try {
        const userData = await UserInfo.find({user: id})

        if(!userData) {
            return res.status(400).json({success: false, error: "User data not found!"})
        }

        return res.status(200).json({success: true, data:userData})
    } catch (error) {
        console.log("Error in getUserInfo controller:- ", error.message)
        return res.status(500).json({success: false, error: error.message})
    }
}

export const postUserInfo = async(req,res) => {

    const {userId} = req.params;
    const {currentWeight,nextShipment,weightLost, bmi, day, pillsTaken, daysLeft} = req.body;

    try {
        const requiredFields = [currentWeight, nextShipment, weightLost, bmi, day, pillsTaken, daysLeft];

          if (requiredFields.some(field => field === undefined || field === null)) {

          return res.status(400).json({success: false, error: "All info is required!"});

        }

        if (isNaN(Date.parse(nextShipment))) {
      return res.status(400).json({ success: false, error: "nextShipment must be a valid date string" });
      }


        const postedInfo = await UserInfo.create({
            user:userId, 
            currentWeight: currentWeight,
            nextShipment:nextShipment,
            weightLost:weightLost,
            bmi:bmi,
            day:day,
            pillsTaken:pillsTaken,
            daysLeft:daysLeft,
        })

        return res.status(200).json({success: true, data: postedInfo})

    } catch (error) {
        console.log("Error in postUserInfo controller:- " , error.message)
        return res.status(500).json({success: false, error: error.message})
    }
}