// src/reducers/dataReducer.js


const homeLandingData = {
  
    "page": "home",
    "component": "landing",
    "timestamp": "",
    "author": "",
    "data": {
      "title": "Mechanize Your Business Using",
      "spanText": "Transforming Small and Enterprise Operations",
      "paragraph": "Imagger Technologies specializes in cutting-edge software solutions tailored to streamline operations for small and enterprise businesses. Our innovative tools are designed to enhance productivity, simplify workflows, and elevate your business performance.",
      "buttonText": "Contact Us",
      "imageUrl": "https://www.haptik.ai/hs-fs/hubfs/Homepage_main-5-10-23.webp?width=4608&height=3771&name=Homepage_main-5-10-23.webp",
      "imageAlt": "Imagger Technologies",
      "demoLink": "/contact",
      "technologies": [
        {
          "techTitle": "Workflow Optimization",
          "techDescription": "Enhance efficiency by optimizing and automating workflows tailored to your business needs."
        },
        {
          "techTitle": "Business Intelligence",
          "techDescription": "Gain valuable insights through advanced analytics and data-driven decision-making tools."
        },
        {
          "techTitle": "Collaboration Solutions",
          "techDescription": "Facilitate seamless collaboration among teams with our intuitive software solutions."
        }
        // Add more technologies as needed
      ]
    }
}





const initialState = {
  // Initial state of your data
  data : homeLandingData
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        [action.payload.page]: {
          ...state[action.payload.page],
          data: action.payload.data
        }
      };
    default:
      return state;
  }
};

export default dataReducer;



