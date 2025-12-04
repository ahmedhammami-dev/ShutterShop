export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "camera", label: "Camera" },
      { id: "light", label: "Light" },
      { id: "gimbal", label: "Gimbal" },
      { id: "accessories", label: "Accessories" },
      { id: "other", label: "Other" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nikon", label: "Nikon" },
      { id: "canon", label: "Canon" },
      { id: "sony", label: "Sony" },
      { id: "fujifilm", label: "Fujifilm" },
      { id: "panasonic", label: "Panasonic" },
      { id: "gopro", label: "GoPro" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "camera",
    label: "Camera",
    path: "/shop/listing",
  },
  {
    id: "light",
    label: "Light",
    path: "/shop/listing",
  },
  {
    id: "gimbal",
    label: "Gimbal",
    path: "/shop/listing",
  },
  {
    id: "other",
    label: "Other",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  camera: "Camera",
  light: "Light",
  gimbal: "Gimbal",
  accessories: "Accessories",
  other: "Other",
};

export const brandOptionsMap = {
  nikon: "Nikon",
  canon: "Canon",
  sony: "Sony",
  fujifilm: "Fujifilm",
  panasonic: "panasonic",
  gopro: "GoPro",
};

export const filterOptions = {
  category: [
    { id: "camera", label: "Camera" },
    { id: "light", label: "Light" },
    { id: "gimbal", label: "Gimbal" },
    { id: "accessories", label: "Accessories" },
    { id: "other", label: "Other" },
  ],
  brand: [
    { id: "nikon", label: "Nikon" },
    { id: "canon", label: "Canon" },
    { id: "sony", label: "Sony" },
    { id: "fujifilm", label: "Fujifilm" },
    { id: "panasonic", label: "Panasonic" },
    { id: "gopro", label: "GoPro" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
