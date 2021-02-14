let mongoose = require('mongoose');

const username = 'cuongtran'
const password = 'matkhau1234';
const db = 'pinksunny';

try
{
    mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ngfyd.mongodb.net/${db}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () =>
        {
            console.log('connected to DB!')
        }
    );
} catch (error)
{
    console.log(error);
}

let ProductSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    specific: {
        height: Number,
        width: Number
    },
    manufacture: {
        cut: String,
        assembly: String
    }
});

module.exports = mongoose.model('Product', ProductSchema);

