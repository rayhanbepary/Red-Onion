import img1 from '../images/Breakfast/breakfast1.png';
import img2 from '../images/Breakfast/breakfast2.png';
import img3 from '../images/Breakfast/breakfast3.png';
import img4 from '../images/Breakfast/breakfast4.png';
import img5 from '../images/Breakfast/breakfast5.png';
import img6 from '../images/Breakfast/breakfast6.png';
import img7 from '../images/lunch/lunch1.png';
import img8 from '../images/lunch/lunch2.png';
import img9 from '../images/lunch/lunch3.png';
import img10 from '../images/lunch/lunch4.png';
import img11 from '../images/lunch/lunch5.png';
import img12 from '../images/lunch/lunch6.png';
import img13 from '../images/Dinner/dinner1.png';
import img14 from '../images/Dinner/dinner2.png';
import img15 from '../images/Dinner/dinner3.png';
import img16 from '../images/Dinner/dinner4.png';
import img17 from '../images/Dinner/dinner5.png';
import img18 from '../images/Dinner/dinner6.png';

const food = [
    {
        id: 1,
        img: img1,
        name: 'Eggs Benedict',
        slug: 'eggs-benedict',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 8.99
    },
    {
        id: 2,
        img: img2,
        name: 'Breakfast Sandwich',
        slug: 'breakfast-sandwich',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 9.99
    },
    {
        id: 3,
        img: img3,
        name: 'Baked Chicken',
        slug: 'baked-chicken',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 10.99
    },
    {
        id: 4,
        img: img4,
        name: 'Bagel and Cream Cheese',
        slug: 'bagel-and-cream-cheese',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 6.99
    },
    {
        id: 5,
        img: img5,
        name: 'Full Breakfast Fried Egg Toast Brunch',
        slug: 'full-breakfast-fried-egg-toast-brunch',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 3.99
    },
    {
        id: 6,
        img: img6,
        name: 'Toast Croissant Fried Egg',
        slug: 'toast-croissant-fried-egg',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 19.99
    },
    {
        id: 7,
        img: img7,
        name: 'Beef Steak',
        slug: 'beef-steak',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 15.99
    },
    {
        id: 8,
        img: img8,
        name: 'Honey-Soy-Glazed Salmon with Peppers',
        slug: 'honey-soy-glazed-salmon-with-peppers',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 7.99
    },
    {
        id: 9,
        img: img9,
        name: 'Tarragon-Rubbed-Salmon',
        slug: 'tarragon-rubbed-salmon',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 6.99
    },
    {
        id: 10,
        img: img10,
        name: 'Indian Lunch',
        slug: 'indian-lunch',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 8.99
    },
    {
        id: 11,
        img: img11,
        name: 'Fried Chicken Bento',
        slug: 'fried-chicken-bento',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 9.99
    },
    {
        id: 12,
        img: img12,
        name: 'Healthy Meal Plan',
        slug: 'healthy-meal-plan',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 23.99
    },
    {
        id: 13,
        img: img13,
        name: 'Baked Chicken',
        slug: 'baked-chicken',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 9.99
    },
    {
        id: 14,
        img: img14,
        name: 'Lemony Salmon Piccata',
        slug: 'lemony-salmon-piccata',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 10.99
    },
    {
        id: 15,
        img: img15,
        name: 'Garlic Butter Baked Salmon',
        slug: 'garlic-butter-baked-salmon',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 6.99
    },
    {
        id: 16,
        img: img16,
        name: 'French Fries with Cheese',
        slug: 'french-fries-with-cheese',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 8.99
    },
    {
        id: 17,
        img: img17,
        name: 'Beef Tenderloin with Quinoa Pilaf',
        slug: 'beef-tenderloin-with-quinoa-pilaf',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 12.99
    },
    {
        id: 18,
        img: img18,
        name: 'Salmon with Grapefruit and Lentil Salad',
        slug: 'salmon-with-grapefruit-and-lentil-salad',
        description: 'How we dream about our future Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae consequatur iste velit accusantium suscipit alias ex atque, tenetur similique?',
        price: 9.99
    }
]

export default food;