import MaasImage from '../../data/assets/servicesandproducts/Maas.png' 
// import BaasImage from '../../data/assets/servicesandproducts/baas.png' 
import SDaasImage from '../../data/assets/servicesandproducts/sdaas.png' 
import VMaasImage from '../../data/assets/servicesandproducts/vmaas.png' 
import ERPImage from '../../data/assets/servicesandproducts/erp.png' 
// import CRMImage from '../../data/assets/servicesandproducts/crm.png' 
import CMSImage from '../../data/assets/servicesandproducts/cms.png' 
// import VOICEImage from '../../data/assets/servicesandproducts/chatbot.png' 
// import TRADEImage from '../../data/assets/servicesandproducts/trade.png' 
const servicesData = {
  topics: [
    {
      "topicName": "Services",
      "subtopics": [
        {
          "id": "1",
          "title": "MaaS",
          "sub-title": "Marketing as a Service",
          "description": "Elevate your brand with Imaggar's Marketing as a Service. Reach your audience effectively through innovative marketing strategies tailored to your business. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "link": "/services/maas",
          "image": MaasImage
        },
        
        {
          "id": "3",
          "title": "SDaaS",
          "sub-title": "Software Development as a Service",
          "description": "Accelerate your digital transformation with Imaggar's Software Development as a Service. Our skilled developers create tailored software solutions to meet your business needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "link": "/services/sdaas",
          "image": SDaasImage
        },
        {
          "id": "4",
          "title": "VMaaS",
          "sub-title": "Vulnerability Management as a Service",
          "description": "Ensure the security of your digital assets with Imaggar's Vulnerability Management as a Service. Proactively identify and address potential vulnerabilities. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "link": "/services/vmaas",
          "image": VMaasImage
        }
      ]
    },
    {
      "topicName": "Products",
      "subtopics": [
        {
          "id": "1",
          "title": "S.I.T.E",
          "sub-title": "Simplified Interface for Transformation and Enhancement",
          "description": "Transform your digital presence with Imaggar's S.I.T.E product. Simplify user interactions and enhance user experience through an intuitive and streamlined interface. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "link": "/products/s.i.t.e",
          "image": CMSImage
        },
        {
          "id": "2",
          "title": "C.O.R.E",
          "sub-title": "Comprehensive Operations and Resource Engine",
          "description": "Optimize your operations with Imaggar's C.O.R.E product. Streamline resource utilization and enhance operational efficiency with our comprehensive engine. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "link": "/products/c.o.r.e",
          "image": ERPImage
        }
      ]
    }
  ]
};

export default servicesData;
