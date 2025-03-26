import { IProperty } from "../interfaces/property.interface";



const properties: IProperty[] = [
  { 
    id:Math.floor(Math.random() * 9999),
    idowner: 1,
    title: "Apartamento moderno no centro",
    type: "apartamento",
    about: "Um apartamento moderno e bem localizado, próximo a todas as comodidades.",
    city: "São Paulo",
    state: "SP",
    price: 1200000,
    published: new Date("2023-10-01"),
    gallery: [
      "https://tse4.mm.bing.net/th?id=OIP.J-xjy1VZ4XKitVUaEVpIBwHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Yswhm8nB4eUmJcdk4Yl1EwHaGG&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.YecF78KPK1f4B3Cu6Qj3BAHaFF&pid=Api&P=0&h=180"
    ],
  },
  {
    id:Math.floor(Math.random() * 9999),
    idowner: 2,
    title: "Casa aconchegante com jardim",
    type: "casa",
    about: "Casa espaçosa com jardim amplo, ideal para famílias.",
    city: "Belo Horizonte",
    state: "MG",
    price: 850000,
    published: new Date("2023-09-15"),
    gallery: [
      "https://jeffersondealmeida.com.br/wp-content/uploads/2023/06/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge.jpg",
      "https://s.yimg.com/uu/api/res/1.2/.XlLq9Zgse3WQ_5i3yLBqg--~B/aD0xMTQwO3c9MTg0MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/elle_decor_817/b73eb223fa1c4c18a6a614de7786bed0",
      "https://tse1.mm.bing.net/th?id=OIP.3P4A7jSqIlzVWnmBwZNvdAHaE6&pid=Api&P=0&h=180"
    ],
  },
  { 
    id:Math.floor(Math.random() * 9999),
    idowner: 1,
    title: "Apartamento moderno no centro",
    type: "apartamento",
    about: "Um apartamento moderno e bem localizado, próximo a todas as comodidades.",
    city: "São Paulo",
    state: "SP",
    price: 1200000,
    published: new Date("2023-10-01"),
    gallery: [
      "https://tse4.mm.bing.net/th?id=OIP.J-xjy1VZ4XKitVUaEVpIBwHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Yswhm8nB4eUmJcdk4Yl1EwHaGG&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.YecF78KPK1f4B3Cu6Qj3BAHaFF&pid=Api&P=0&h=180"
    ],
  },
  {
    id:Math.floor(Math.random() * 9999),
    idowner: 2,
    title: "Casa aconchegante com jardim",
    type: "casa",
    about: "Casa espaçosa com jardim amplo, ideal para famílias.",
    city: "Belo Horizonte",
    state: "MG",
    price: 850000,
    published: new Date("2023-09-15"),
    gallery: [
      "https://jeffersondealmeida.com.br/wp-content/uploads/2023/06/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge.jpg",
      "https://s.yimg.com/uu/api/res/1.2/.XlLq9Zgse3WQ_5i3yLBqg--~B/aD0xMTQwO3c9MTg0MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/elle_decor_817/b73eb223fa1c4c18a6a614de7786bed0",
      "https://tse1.mm.bing.net/th?id=OIP.3P4A7jSqIlzVWnmBwZNvdAHaE6&pid=Api&P=0&h=180"
    ],
  }, { 
    id:Math.floor(Math.random() * 9999),
    idowner: 1,
    title: "Apartamento moderno no centro",
    type: "apartamento",
    about: "Um apartamento moderno e bem localizado, próximo a todas as comodidades.",
    city: "São Paulo",
    state: "SP",
    price: 1200000,
    published: new Date("2023-10-01"),
    gallery: [
      "https://tse4.mm.bing.net/th?id=OIP.J-xjy1VZ4XKitVUaEVpIBwHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Yswhm8nB4eUmJcdk4Yl1EwHaGG&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.YecF78KPK1f4B3Cu6Qj3BAHaFF&pid=Api&P=0&h=180"
    ],
  },
  {
    id:Math.floor(Math.random() * 9999),
    idowner: 2,
    title: "Casa aconchegante com jardim",
    type: "casa",
    about: "Casa espaçosa com jardim amplo, ideal para famílias.",
    city: "Belo Horizonte",
    state: "MG",
    price: 850000,
    published: new Date("2023-09-15"),
    gallery: [
      "https://jeffersondealmeida.com.br/wp-content/uploads/2023/06/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge.jpg",
      "https://s.yimg.com/uu/api/res/1.2/.XlLq9Zgse3WQ_5i3yLBqg--~B/aD0xMTQwO3c9MTg0MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/elle_decor_817/b73eb223fa1c4c18a6a614de7786bed0",
      "https://tse1.mm.bing.net/th?id=OIP.3P4A7jSqIlzVWnmBwZNvdAHaE6&pid=Api&P=0&h=180"
    ],
  }, { 
    id:Math.floor(Math.random() * 9999),
    idowner: 1,
    title: "Apartamento moderno no centro",
    type: "apartamento",
    about: "Um apartamento moderno e bem localizado, próximo a todas as comodidades.",
    city: "São Paulo",
    state: "SP",
    price: 1200000,
    published: new Date("2023-10-01"),
    gallery: [
      "https://tse4.mm.bing.net/th?id=OIP.J-xjy1VZ4XKitVUaEVpIBwHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Yswhm8nB4eUmJcdk4Yl1EwHaGG&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.YecF78KPK1f4B3Cu6Qj3BAHaFF&pid=Api&P=0&h=180"
    ],
  },
  {
    id:Math.floor(Math.random() * 9999),
    idowner: 2,
    title: "Casa aconchegante com jardim",
    type: "casa",
    about: "Casa espaçosa com jardim amplo, ideal para famílias.",
    city: "Belo Horizonte",
    state: "MG",
    price: 850000,
    published: new Date("2023-09-15"),
    gallery: [
      "https://jeffersondealmeida.com.br/wp-content/uploads/2023/06/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge.jpg",
      "https://s.yimg.com/uu/api/res/1.2/.XlLq9Zgse3WQ_5i3yLBqg--~B/aD0xMTQwO3c9MTg0MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/elle_decor_817/b73eb223fa1c4c18a6a614de7786bed0",
      "https://tse1.mm.bing.net/th?id=OIP.3P4A7jSqIlzVWnmBwZNvdAHaE6&pid=Api&P=0&h=180"
    ],
  }, { 
    id:Math.floor(Math.random() * 9999),
    idowner: 1,
    title: "Apartamento moderno no centro",
    type: "apartamento",
    about: "Um apartamento moderno e bem localizado, próximo a todas as comodidades.",
    city: "São Paulo",
    state: "SP",
    price: 1200000,
    published: new Date("2023-10-01"),
    gallery: [
      "https://tse4.mm.bing.net/th?id=OIP.J-xjy1VZ4XKitVUaEVpIBwHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Yswhm8nB4eUmJcdk4Yl1EwHaGG&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.YecF78KPK1f4B3Cu6Qj3BAHaFF&pid=Api&P=0&h=180"
    ],
  },
  {
    id:Math.floor(Math.random() * 9999),
    idowner: 2,
    title: "Casa aconchegante com jardim",
    type: "casa",
    about: "Casa espaçosa com jardim amplo, ideal para famílias.",
    city: "Belo Horizonte",
    state: "MG",
    price: 850000,
    published: new Date("2023-09-15"),
    gallery: [
      "https://jeffersondealmeida.com.br/wp-content/uploads/2023/06/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge.jpg",
      "https://s.yimg.com/uu/api/res/1.2/.XlLq9Zgse3WQ_5i3yLBqg--~B/aD0xMTQwO3c9MTg0MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/elle_decor_817/b73eb223fa1c4c18a6a614de7786bed0",
      "https://tse1.mm.bing.net/th?id=OIP.3P4A7jSqIlzVWnmBwZNvdAHaE6&pid=Api&P=0&h=180"
    ],
  }, { 
    id:Math.floor(Math.random() * 9999),
    idowner: 1,
    title: "Apartamento moderno no centro",
    type: "apartamento",
    about: "Um apartamento moderno e bem localizado, próximo a todas as comodidades.",
    city: "São Paulo",
    state: "SP",
    price: 1200000,
    published: new Date("2023-10-01"),
    gallery: [
      "https://tse4.mm.bing.net/th?id=OIP.J-xjy1VZ4XKitVUaEVpIBwHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Yswhm8nB4eUmJcdk4Yl1EwHaGG&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.YecF78KPK1f4B3Cu6Qj3BAHaFF&pid=Api&P=0&h=180"
    ],
  },
  {
    id:Math.floor(Math.random() * 9999),
    idowner: 2,
    title: "Casa aconchegante com jardim",
    type: "casa",
    about: "Casa espaçosa com jardim amplo, ideal para famílias.",
    city: "Belo Horizonte",
    state: "MG",
    price: 850000,
    published: new Date("2023-09-15"),
    gallery: [
      "https://jeffersondealmeida.com.br/wp-content/uploads/2023/06/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge.jpg",
      "https://s.yimg.com/uu/api/res/1.2/.XlLq9Zgse3WQ_5i3yLBqg--~B/aD0xMTQwO3c9MTg0MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/elle_decor_817/b73eb223fa1c4c18a6a614de7786bed0",
      "https://tse1.mm.bing.net/th?id=OIP.3P4A7jSqIlzVWnmBwZNvdAHaE6&pid=Api&P=0&h=180"
    ],
  }, { 
    id:Math.floor(Math.random() * 9999),
    idowner: 1,
    title: "Apartamento moderno no centro",
    type: "apartamento",
    about: "Um apartamento moderno e bem localizado, próximo a todas as comodidades.",
    city: "São Paulo",
    state: "SP",
    price: 1200000,
    published: new Date("2023-10-01"),
    gallery: [
      "https://tse4.mm.bing.net/th?id=OIP.J-xjy1VZ4XKitVUaEVpIBwHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Yswhm8nB4eUmJcdk4Yl1EwHaGG&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.YecF78KPK1f4B3Cu6Qj3BAHaFF&pid=Api&P=0&h=180"
    ],
  },
  {
    id:Math.floor(Math.random() * 9999),
    idowner: 2,
    title: "Casa aconchegante com jardim",
    type: "casa",
    about: "Casa espaçosa com jardim amplo, ideal para famílias.",
    city: "Belo Horizonte",
    state: "MG",
    price: 850000,
    published: new Date("2023-09-15"),
    gallery: [
      "https://jeffersondealmeida.com.br/wp-content/uploads/2023/06/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge.jpg",
      "https://s.yimg.com/uu/api/res/1.2/.XlLq9Zgse3WQ_5i3yLBqg--~B/aD0xMTQwO3c9MTg0MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/elle_decor_817/b73eb223fa1c4c18a6a614de7786bed0",
      "https://tse1.mm.bing.net/th?id=OIP.3P4A7jSqIlzVWnmBwZNvdAHaE6&pid=Api&P=0&h=180"
    ],
  }, { 
    id:Math.floor(Math.random() * 9999),
    idowner: 1,
    title: "Apartamento moderno no centro",
    type: "apartamento",
    about: "Um apartamento moderno e bem localizado, próximo a todas as comodidades.",
    city: "São Paulo",
    state: "SP",
    price: 1200000,
    published: new Date("2023-10-01"),
    gallery: [
      "https://tse4.mm.bing.net/th?id=OIP.J-xjy1VZ4XKitVUaEVpIBwHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Yswhm8nB4eUmJcdk4Yl1EwHaGG&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.YecF78KPK1f4B3Cu6Qj3BAHaFF&pid=Api&P=0&h=180"
    ],
  },
  {
    id:Math.floor(Math.random() * 9999),
    idowner: 2,
    title: "Casa aconchegante com jardim",
    type: "casa",
    about: "Casa espaçosa com jardim amplo, ideal para famílias.",
    city: "Belo Horizonte",
    state: "MG",
    price: 850000,
    published: new Date("2023-09-15"),
    gallery: [
      "https://jeffersondealmeida.com.br/wp-content/uploads/2023/06/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge.jpg",
      "https://s.yimg.com/uu/api/res/1.2/.XlLq9Zgse3WQ_5i3yLBqg--~B/aD0xMTQwO3c9MTg0MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/elle_decor_817/b73eb223fa1c4c18a6a614de7786bed0",
      "https://tse1.mm.bing.net/th?id=OIP.3P4A7jSqIlzVWnmBwZNvdAHaE6&pid=Api&P=0&h=180"
    ],
  }, { 
    id:Math.floor(Math.random() * 9999),
    idowner: 1,
    title: "Apartamento moderno no centro",
    type: "apartamento",
    about: "Um apartamento moderno e bem localizado, próximo a todas as comodidades.",
    city: "São Paulo",
    state: "SP",
    price: 1200000,
    published: new Date("2023-10-01"),
    gallery: [
      "https://tse4.mm.bing.net/th?id=OIP.J-xjy1VZ4XKitVUaEVpIBwHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Yswhm8nB4eUmJcdk4Yl1EwHaGG&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.YecF78KPK1f4B3Cu6Qj3BAHaFF&pid=Api&P=0&h=180"
    ],
  },
  {
    id:Math.floor(Math.random() * 9999),
    idowner: 2,
    title: "Casa aconchegante com jardim",
    type: "casa",
    about: "Casa espaçosa com jardim amplo, ideal para famílias.",
    city: "Belo Horizonte",
    state: "MG",
    price: 850000,
    published: new Date("2023-09-15"),
    gallery: [
      "https://jeffersondealmeida.com.br/wp-content/uploads/2023/06/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge.jpg",
      "https://s.yimg.com/uu/api/res/1.2/.XlLq9Zgse3WQ_5i3yLBqg--~B/aD0xMTQwO3c9MTg0MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/elle_decor_817/b73eb223fa1c4c18a6a614de7786bed0",
      "https://tse1.mm.bing.net/th?id=OIP.3P4A7jSqIlzVWnmBwZNvdAHaE6&pid=Api&P=0&h=180"
    ],
  },
];

export default properties;