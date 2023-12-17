import Fee from "../models/fee.schema.js";


export const getAllUsers = async (req, res, next) => {

//     //Extracting search query parameter or defaulting to an empty string
// const search=req.search||"";

// //Calculating page number based on the presence of search query 
// const page=(search === '' ?(parseInt(req.query.page)-1 || 0):0)

// //Extracting limiet query paramenter or defaulting to 50
// const limit =parseInt(req.query.limit) || 50;

// //Extracting and parsing sort query parameter or defaulting to "_id"
// let sort=req.query.sort || "_id";

// //Calculating the starting Index for pagination
// const StartIndex=page*limit;

// //Parsing the sort paramenter into an array if present 
// req.query.sort?(sort=req.query.sort.split(',')):(sort = [sort])

// //Creating an object to define the sorting order
// let sortBy={};
// sort[1] ? (sortBy[sort[0]]=sort[1]):(sortBy[sort[0]]='asc')

// //Fetching users from the database based on search, sroting, pagination
// const users=await userFee.find({fullName:{$regex:search,$option:'i'}}).sort(sortBy).skip(StartIndex).limit(limit);

// //Calculating the total number of pages based on the limit
// const pageCount=Math.ceil(totalUser/limit);

// //Sending the response with user data, total users count, and pagination deatails
// res.json({users, totalUsers,page:page+1,pageCount})

    const userFee = await Fee.find({})
    res.json(userFee)
}

export const getUserById = async (req, res, next) => {
    const {id} = req.params;
    try {
        const userFee = await Fee.findById(id)
        if (userFee) {
            res.json(userFee)
        } else {
            next(new Error('userFee not found'))
        }
    } catch (error) {
        next(error)
    }

}

export const createNewUser = async (req, res, next) => {
    const newFee = req.body;
    console.log(newFee);
    try {
        console.log("hello");
        const r=await Fee.create(newFee);
        console.log(r);
        res.json({
            fee:r,
            message:'Fee created successfully'
        })
    } catch (error) {
        next(error);

    }

}

export const updateUser = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const update = req.body;
        console.log(update);
        const updatedResult = await Fee.findOneAndUpdate({
            _id: id
        }, req.body, {
            new: true
        });
        if (!updatedResult) {
            return res.status(404).json({
                success: false,
                message: 'Fee not found',
            });
        }
        res.json({
            success: true,
            message: 'Data updated successfully',
            updatedResult,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        if (!id) {
            return res.status(400).json({error: 'Invalid ID provided'});
        }
        const deletedUser = await Fee.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({
                error: 'Fee not found'
            });
        }
        res.json({
            message: 'Fee deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};