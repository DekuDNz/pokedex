const changecolorbg = (color) => {
  const colorPkm = document.querySelector(".dexBoximage");
  colorPkm.style.backgroundColor = color;
};
const btnLeft = document.querySelector(".btnleft");
const btnRight = document.querySelector(".btnright");

const picture1 = () => {
  const picture = document.querySelector("#imagechange");
  picture.src =
    "https://i.pinimg.com/1200x/63/00/cf/6300cf8cc236bbc1d97bb5dfb97b3579.jpg";
};
btnLeft.addEventListener("click", picture1);

const picture2 = () => {
  const picture = document.querySelector("#imagechange");
  picture.src =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/582b79d5-3913-43bc-8d66-478190d6fa3e/d7azlw2-57ce972b-55f6-4d84-9612-7afaef5d4d4c.png/v1/fill/w_1024,h_820,q_80,strp/realistic_venusaur_by_ice_wolf_elemental_d7azlw2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODIwIiwicGF0aCI6IlwvZlwvNTgyYjc5ZDUtMzkxMy00M2JjLThkNjYtNDc4MTkwZDZmYTNlXC9kN2F6bHcyLTU3Y2U5NzJiLTU1ZjYtNGQ4NC05NjEyLTdhZmFlZjVkNGQ0Yy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Z2wAMO_hU5qQ6gwJcON_A_qfTo-LeCbu41VBOkJclkQ";
};
btnRight.addEventListener("click", picture2);
