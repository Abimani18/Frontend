// routeData.js


//product route
import waspData from './productData/productsPageData/wasp';


//service route
import sdaasData from './serviceData/servicesPageData/sdaas';
import maasData from './serviceData/servicesPageData/maas';
import baasData from './serviceData/servicesPageData/baas';
import vmaasData from './serviceData/servicesPageData/vmaas';
import owlData from './productData/productsPageData/owl';


const routeData = [
    { url: "/products/w.a.s.p", Data: waspData },
    { url: "/products/o.w.l", Data: owlData },
  
    { url: "/services/maas", Data: maasData },
    { url: "/services/baas", Data: baasData },
    { url: "/services/sdaas", Data: sdaasData },
    { url: "/services/vmaas", Data: vmaasData }
];

export default routeData;
