import { faVrCardboard, faGamepad, faMobile, faCircleNodes } from '@fortawesome/free-solid-svg-icons';

  
  export const allIngredients = [
    { icon: faVrCardboard, label: "Virtual Reality & Augmented Reality", color: "#70d6ff" },
    { icon: faGamepad, label: "Video Games & Serious Games", color: "#ff70a6" },
    { icon: faCircleNodes, label: "Machine Learning & Computer Vision", color: "#ff9770" },
    { icon: faMobile, label: "Technologies & Science", color: "#ffd670" },
    { icon: "🥂", label: "Champers?", color: "#lightblue" }
  ];
  
  const [vr, vg, ml, tc] = allIngredients;
  export const initialTabs = [vr, vg, ml, tc];
  
  export function getNextIngredient(
    ingredients) {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
  