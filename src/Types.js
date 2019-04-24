import React, { Component } from 'react'

export class Types extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            restaurants: {
                "mediterranean": {
                    "Mediterranean Grill": [
                        "hummus", "tabouli", "dolmas"
                    ],
                    "Yalla": [
                        "hummus wrap", "tabouli wrap", "dolmas"
                    ],
                    "Nik's": [
                        "spanakopita", "gyro", "dolmas"
                    ]
                },
                "american": {
                    "Chik fil a": [
                        "chicken biscuit", "chicken sandwich", "chicken salad"
                    ],
                    "Mary Mac's Tea Room": [
                        "biscuit", "fried chicken", "mashed potatoes"
                    ],
                    "Jersey Mike's": [
                        "Big Sandwich", "Bigger Sandwich", "Most Biggerest Sandwich"
                    ]
                },
                "mexican": {
                    "Elmyriachi": [
                        "tacos", "burritos", "cheese dip"
                    ],
                    "Mezcalito's Cantina": [
                        "tortas", "tamales", "cheese dip"
                    ],
                    "Matador": [
                        "cheese dip", "cheese dip", "cheese dip"
                    ]
                }
            }
        }
    }
    
    render() {
        const restaurantTypes = this.state.restaurants;
        return (
            <div>
                <ul>
                    {
                        Object.keys(restaurantTypes).map((type, i) => (<li key={i}>{type}</li>))
                    }
                </ul>
            </div>
        )
    }
}

export default Types
