import type { Config } from "tailwindcss";

export default<Partial<Config>>{
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
     colors:{
      primary_color:"#006975",
      secondary_color:"#858592",
      light:"#fff",
      dark:"#051C2C",
      danger:"#EF4351"
     },
     screens:{
      "desktop":"1450px",
      'laptop': '1134px',
      'tablet': '815px',
      "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":"1536px"
     }
  },
  plugins: [require("daisyui")],
}

