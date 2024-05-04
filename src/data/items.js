function gidFunc() {
    let counter = 1;
    return () => counter++
  }
  
  const gid = gidFunc();
  
  export const data = [
    {
      head: "Текст заголовка",
      body: "Текст подзаголовка",
      id: gid(),
    },
    {
      id: gid(),
      image: "/public/48210360.png"  
    },
    {
      id: gid(),
      link: "https://pikabu.ru/story/_drop_table_users_8402059",
      linkText: "dropdatabase meme"
    },
    {
      head: "Текст заголовка",
      body: "Маленький проект сделан на React",
      id: gid(),
    },
  ];
  