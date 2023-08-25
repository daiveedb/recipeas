import vegan from "./projectSvgs/vegan.jpg"
import african from "./projectSvgs/african.jpg"
import chinese from "./projectSvgs/chinese.jpg"
import italian from "./projectSvgs/italian.jpg"
import dessert from "./projectSvgs/dessert.jpg"
import main from "./projectSvgs/main.jpg"
import appetizer from "./projectSvgs/appetizer.jpg"
import soups from "./projectSvgs/soups.jpg"
import salad from "./projectSvgs/salad.jpg"
import snack from "./projectSvgs/snack.jpg"
import bread from "./projectSvgs/bread.jpg"
import lactose from "./projectSvgs/lactose.jpg"
import sidedish from "./projectSvgs/sidedish.jpg"
import drinks from "./projectSvgs/drinks.jpg"
import breakfast from "./projectSvgs/breakfast.jpg"

export const categories = [
    {
        categoryId:1,
        categoryName:"Vegan",
        categoryImageUrl:vegan,
        categoryCallUrl:"https://api.spoonacular.com/recipes/complexSearch?limitLicense=true&diet=vegan&number=1&instructionsRequired=true&fillIngredients=true&apiKey=dd5446f6f07c4707a6f376ea217c7740",
    },
    {
        categoryId:2,
        categoryName:"African",
        categoryImageUrl:african,
        categoryCallUrl:"",
    },
    {
        categoryId:3,
        categoryName:"Chinese",
        categoryImageUrl:chinese,
        categoryCallUrl:"",
    },
    {
        categoryId:4,
        categoryName:"Italian",
        categoryImageUrl:italian,
        categoryCallUrl:"",
    },
    {
        categoryId:5,
        categoryName:"Desert",
        categoryImageUrl:dessert,
        categoryCallUrl:"",
    },
    {
        categoryId:6,
        categoryName:"Main Course",
        categoryImageUrl:main,
        categoryCallUrl:"",
    },
    {
        categoryId:7,
        categoryName:"Appetizers",
        categoryImageUrl:appetizer,
        categoryCallUrl:"",
    },
    {
        categoryId:8,
        categoryName:"Soups",
        categoryImageUrl:soups,
        categoryCallUrl:"",
    },
    {
        categoryId:9,
        categoryName:"Salad",
        categoryImageUrl:salad,
        categoryCallUrl:"",
    },
    {
        categoryId:10,
        categoryName:"Lactose Intolerant",
        categoryImageUrl:lactose,
        categoryCallUrl:"",
    },
    {
        categoryId:11,
        categoryName:"Bread & pastries",
        categoryImageUrl:bread,
        categoryCallUrl:"",
    },
    {
        categoryId:12,
        categoryName:"Side Meals",
        categoryImageUrl:sidedish,
        categoryCallUrl:"",
    },
    {
        categoryId:13,
        categoryName:"Breakfast",
        categoryImageUrl:breakfast,
        categoryCallUrl:"",
    },
    {
        categoryId:14,
        categoryName:"Snacks",
        categoryImageUrl:snack,
        categoryCallUrl:"",
    },
    {
        categoryId:15,
        categoryName:"Drinks",
        categoryImageUrl:drinks,
        categoryCallUrl:"",
    },
]

export const collections = [
    {
        id:1,
        title: 'Ready in 30 minutes',
        url:"https://api.spoonacular.com/recipes/complexSearch?query=pasta&limitLicense=true&number=6&maxReadyTime=30&sort=time&fillIngredients=true&sortDirection=asc&apiKey=dd5446f6f07c4707a6f376ea217c7740"
    },
    {
        id:2,
        title: 'Gluten Free',
        url:"https://api.spoonacular.com/recipes/complexSearch?query=food&limitLicense=true&number=6&fillIngredients=true&intolerances=gluten&apiKey=dd5446f6f07c4707a6f376ea217c7740"
    },
    {
        id:3,
        title: 'Rice Rice Baby',
        url:""
    },
]