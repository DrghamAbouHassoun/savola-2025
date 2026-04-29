import NewHeader from "../modules/common/components/headers/NewHeader";
import SavolaFoodBg from "../assets/images/new-headers/savola-foods.jpg";

const SavolaFoodPage = () => {
  return (
    <div>
      <NewHeader 
        imageUrl={SavolaFoodBg}
        title="Savola Foods"
      />
    </div>
  );
};

export default SavolaFoodPage;
