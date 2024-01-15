const router=require("express").Router();
const Customer=require("./model");
//get all customers
router.get("/",async (req, res) => {
    try{
        const allcustomers=await Customer.find({});
    return res.status(200).json(allcustomers);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }   
 });
 //get one customer 
 router.get("/:cnum",async(req,res)=>{
    try{
        const num=req.params.cnum;
        const customer=await Customer.find({cnum:num});
        return res.status(200).json(customer);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
 });
 //add a customer
 router.post("/",async(req,res)=>{
    try{
        const newcust=await Customer.create(req.body);
        return res.status(201).send(newcust);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
 }
 );
 //delete a customer
 router.delete('/:cnum',async(req,res)=>{
    try{
        const num=req.params.cnum;
        await Customer.findOneAndDelete({cnum:num});
        return res.status(200).send()

}catch(error){
        console.log(error.message);
    res.status(500).send({ message: error.message });
    }
});
router.put('/:cnum',async(req,res)=>{
    try{
        
        const num =req.params.cnum;
        const result=await Customer.findOneAndUpdate({ cnum: num},req.body);
        if(!result){
            return res.status(404).json({message:'Customer not found'});
        }
        return res.status(200).json({message:'Customer updated successfully'});
    
    }catch{
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
    });

module.exports=router;

