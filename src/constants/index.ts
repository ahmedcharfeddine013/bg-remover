import favorite_gallery from "../../public/assets/icons/gallery-favorite.svg";
import loop from "../../public/assets/icons/loop.svg";
import eye from "../../public/assets/icons/eye.svg";
import hero_bg from "../../public/assets/hero_bg.jpg";

export const bg_remover_api_key = process.env
  .NEXT_PUBLIC_REMOVE_BG_API_KEY as string;
  
export { hero_bg };

export const icons = { favorite_gallery, loop, eye };
