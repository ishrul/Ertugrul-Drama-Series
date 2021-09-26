const drama = [
  {
    charecter: "Ertugrul Gazi",
    actor: "Engin Altan Düzyatan",
    Nationality: "Turkish",
    salary: 89000000,
    img: "https://localwriter.pk/wp-content/uploads/2020/05/ertugrul-gazi.jpg",
  },
  {
    charecter: "Süleyman Şah",
    actor: "Serdar Gökhan",
    Nationality: "Turkish",
    salary: 54000000,
    img: "https://localwriter.pk/wp-content/uploads/2020/05/sulayman-shah.jpg",
  },
  {
    charecter: "Hayme Hatun",
    actor: "Hülya Darcan",
    Nationality: "Turkish",
    salary: 78000000,
    img: "https://localwriter.pk/wp-content/uploads/2020/05/Halime-Sultan.jpg",
  },
  {
    charecter: "Turgut Alp",
    actor: "Cengiz Coşkun",
    Nationality: "Turkish",
    salary: 85000000,
    img: "https://localwriter.pk/wp-content/uploads/2020/05/turgut-alp.jpg",
  },
  {
    charecter: "Bamsı Beyrek",
    actor: "Nurettin Sönmez",
    Nationality: "Turkish",
    salary: 56000000,
    img: "https://i.pinimg.com/originals/31/8b/5e/318b5e3f0dca9992ff74fd2a4b712bd2.png",
  },
  {
    charecter: "Doğan Alp",
    actor: "Cavit Çetin Güner",
    Nationality: "Turkish",
    salary: 78000000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRRYxBEglfnn5WuLLUMsvN5KvOw-PU-YH4A&usqp=CAU",
  },
  {
    charecter: "Tuğtekin Bey",
    actor: "Uğur Güneş",
    Nationality: "Turkish",
    salary: 58000000,
    img: "https://i.pinimg.com/originals/19/d8/62/19d862c52b8538b8ef3bf025b002484f.jpg",
  },
  {
    charecter: "Baycu Noyan",
    actor: "Barış Bağcı",
    Nationality: "Turkish",
    salary: 88000000,
    img: "data:image/jpeg;base64,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",
  },
  {
    charecter: "Osman Bey",
    actor: "Emre Üçtepe",
    Nationality: "Turkish",
    salary: 120000000,
    img: "https://wallpapercave.com/wp/wp6297178.png",
  },
  {
    charecter: "İbn-i Arabi",
    actor: "Ozman Sirgood",
    Nationality: "Turkish",
    salary: 59000000,
    img: "https://wallpapercave.com/wp/wp6663537.jpg",
  },
];
