const books = [
    {
        id: 1,
        title: "Sanduk Ruhit",
        category: "Biography",
        img: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/SandukRuitPhoto_20190918175341.jpg",
        link: "https://www.isaaward.org/wp-content/uploads/2023/02/Final-English-pages.pdf",
        desc: "An inspiring biography of  an ophthalmologist from Nepal who restored the sight of over 180,000 people across Africa and Asia."
    },
    {
        id: 2,
        title: 'Barack Obama',
        category :'Biography',
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_in4Kmt8cRbluFa1RdD30mrHf5uEcdJgGA&s" ,
        link :"https://www.arvindguptatoys.com/arvindgupta/obama-bio.pdf",
        desc : "Barack Obama is the first African American to be elected as the President of the United States. This book is his biography that covers his early life, education, and political career. This book is a must-read for those who want to know about the life of Barack Obama.",
    },
    {
        id: 3,
        title: 'Rich dad poor dad',
        category :'freeToRead',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczsgatXtDK-iYGgcDfvh4KnCDutA76-0aEA&s',
        link :"https://ia904501.us.archive.org/4/items/rich-dad-poor-dad_202106/Rich%20Dad%20Poor%20Dad.pdf",
        desc : "This book is about the importance of financial education and how it can help you become rich. The author shares his experience of growing up with two dads – his real father and his friend’s father. This book is a must-read for those who want to be financially independent."
    },
    {
        id: 4,
        title: 'The Alchemist',
        category :'novel',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7sxVp7BRgGBjwkBJS6Gyls4O6Z3ykFdZz0A&s',
        link :"https://ia601006.us.archive.org/13/items/OceanofPDF.comTheAlchemist/_OceanofPDF.com_The_Alchemist.pdf",
        desc : "The Alchemist is a novel that follows the journey of a young shepherd named Santiago. He travels from Spain to Egypt in search of a treasure buried in the Pyramids. This book is a must-read for those who want to follow their dreams."
    },
    {
        id: 5,
        title: 'The Great Gatsby',
        category :'novel',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLF0HhC3iJWTHbEXYsb4KJRJ4v56NvGEAOw&s',
        link :"https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf",
        desc : "The Great Gatsby is a novel that follows the life of Jay Gatsby, a millionaire who lives in West Egg on Long Island. The story is narrated by Nick Carraway, who is Gatsby’s neighbor. This book is a must-read for those who want to know about the Jazz Age in America."
    },
    {
        id: 6,
        title: 'To Kill a Mockingbird',
        category :'novel',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JYT-P7_c_TZ7QPZbyr4AnTCdd7d5MC6FfA&s',
        link :"https://www.raio.org/TKMFullText.pdf",
        desc : "To Kill a Mockingbird is a novel that follows the life of Scout Finch and the events that take place in her hometown of Maycomb, Alabama. The story is narrated by Scout, who is a young man. This book is a must-read for those who want to know about the racial injustice in America.",
    },
    {
        id: 7,
        title: 'The Catcher in the Rye',
        category :'novel',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLDHqFM0tKOvcJ6E67VX40fRA41QSLO7Zxw&s',
        link :"https://giove.isti.cnr.it/demo/eread/Libri/sad/Rye.pdf",
        desc : "The Catcher in the Rye is a novel that follows the life of Holden Caulfield, a teenager who has been expelled from his school. The story is narrated by Holden, who is in a mental institution. This book is a must-read for those who want to know about the teenage experience in America."
    },
    {
        id: 8,
        title: '1984',
        category :'novel',
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuC2wguE1kHMoqAFhm_YRdtiPmHZdyqi4Hg&s",
        link :'https://rauterberg.employee.id.tue.nl/lecturenotes/DDM110%20CAS/Orwell-1949%201984.pdf',
        desc : "1984 is a novel that follows the life of the protagonist, Winston Smith, who lives in a dystopian society. The story is set in the year 1984, where the government controls every aspect of people’s lives. This book is a must-read for those who want to know about the dangers of totalitarianism.",
    },
    {
        id : 9,
        title : 'One hundred years of solitude',
        category :'popular',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSShg3q26BUrKPAzQioqjzZvmoDneenHiabjw&s',
        link : 'https://dn790002.ca.archive.org/0/items/OneHundredYearsOfSolitude_201710/One_Hundred_Years_of_Solitude.pdf',
        desc : 'One Hundred Years of Solitude is a novel that follows the life of the Buendia family in the fictional town of Macondo. The story is narrated by Gabriel Garcia Marquez, who is a Colombian author. This book is a must-read for those who want to know about the magical realism in Latin American literature.'

    },
    {
        id : 10,
        title : 'The Lord of the Rings',
        category :'popular',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1JXsoMBkSwsAqWb6NS1C9Z9d8cpVJkVWbg&s',
        link : 'https://gosafir.com/mag/wp-content/uploads/2019/12/Tolkien-J.-The-lord-of-the-rings-HarperCollins-ebooks-2010.pdf',
        desc : 'The Lord of the Rings is a novel that follows the journey of Frodo Baggins, a hobbit who is tasked with destroying the One Ring. The story is set in the fictional world of Middle-earth and is narrated by J.R.R. Tolkien. This book is a must-read for those who want to discover the world of fantasy literature.'
    },
    {
        id : 11,
        title : 'The Hobbit',
        category :'popular',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh84E0UklxudEzj_euXi_d48uwSAJQw-pJOQ&s',
        link : 'https://primarysite-prod-sorted.s3.amazonaws.com/gobowen-primary-school/UploadedDocument/db3a2424ab834ade94f16606d5567712/the-hobbit-1.pdf',
        desc : 'The Hobbit is a novel that follows the journey of Bilbo Baggins, a hobbit who is tasked with reclaiming the Lonely Mountain from the dragon Smaug. The story is set in the fictional world of Middle-earth and is narrated by J.R.R. Tolkien. This book is a must-read for those who want to discover the world of fantasy literature.'
    },
    {
        id : 12,
        title : 'The Da Vinci Code',
        category :'popular',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zK-kjrpXuJS2spAnPOUU7xrQEynOHoZVkQ&s',
        link : 'http://files.hostgator.co.in/hostgator253199/file/thedavincicode-danbrown.pdf',
        desc : 'The Da Vinci Code is a novel that follows the journey of Robert Langdon, a symbologist who is tasked with solving problems related to the Holy Grail. The story is set in Paris and is narrated by Dan Brown. This book is a must-read for those who want to know about the secrets of the Catholic Church.'
    },
    {
        id : 13,
        title : 'Pride and prejudice',
        category :'popular',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-A_EXI7f3O00KZuGzElap5tlJeralXll5mQ&s',
        link : 'https://giove.isti.cnr.it/demo/eread/Libri/joy/Pride.pdf',
        desc : 'Pride and Prejudice is a novel that follows the life of Elizabeth Bennet and the events that take place in her hometown of Meryton. The story is narrated by Jane Austen, who is an English author. This book is a must-read for those who want to know about the social norms of the 19th century.'
    },
    {
        id : 14,
        title : 'The Picture of Dorian Gray',
        category :'popular',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZGUwCH_EzbCuDxrzfSECJdl-keVH93HN5A&s',
        link : 'https://web.seducoahuila.gob.mx/biblioweb/upload/the_picture_of_dorian_gray.pdf',
        desc : 'The Picture of Dorian Gray by Oscar Wilde is a Victorian novel about a young man who makes a deal with the devil to remain young and handsome.'
    },
    {
       id : 15,
       title :"Steve Jobs by Walter Isaacson",
       category :'Biography',
       img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8pMm_izfoPfYllx7EbQCOR5Em6dQP4_u8ow&s',
      link : "https://elib.buxdupi.uz/books/isaacson2011stevejobs.pdf",
      desc : "Steve Jobs by Walter Isaacson is a biography of Steve Jobs, the co-founder of Apple Inc. This book covers his early life, education, and career. This book is a must-read for those who want to know about the life of Steve Jobs."
        
    },
    {
       id : 16,
      title : "Wings of fire",
        category :'Biography',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WJwt1SQrJ4UbOO7wm4N5fkNUSPjbWcJL6g&s',
        link : "https://ati.dae.gov.in/ati12052021_8.pdf",
        desc : "Wings of Fire is an autobiography of Dr. APJ Abdul Kalam, the former President of India. This book covers his early life, education, and career. This book is a must-read for those who want to know about the life of Dr. APJ Abdul Kalam."
    },
    {
        id: 17,
        title: "The Art of War",
        category: "freeToRead",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wVPmHtxZmcqG_AojPeJAqTcDSBEC2MFs1w&s",
        link: "https://www.gutenberg.org/files/132/132-h/132-h.htm",
        desc: "An ancient Chinese military treatise attributed to Sun Tzu, this book is a timeless classic on strategy and warfare. It’s a must-read for those interested in strategy and leadership."
    },
    {
        id: 18,
        title: "Sapiens: A Brief History of Humankind",
        category: "popular",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnL4gvtq780UcmZtfr8UgMJG6Pu4E-il9Ng&s",
        link: "https://www.1pezeshk.com/wp-content/uploads/2019/07/Sapiens-A-Brief-History-of-Humankind.pdf",
        desc: "Yuval Noah Harari takes us through a fascinating journey of human history from the Stone Age to the Silicon Age. A thought-provoking book for anyone curious about our evolution."
    },
    {
        id: 19,
        title: "The Subtle Art of Not Giving a F*ck",
        category: "popular",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYNlI4uSweHY2fMJZUkyqCstRnwAD2Oqoog&s",
        link: "https://dokumen.pub/qdownload/the-subtle-art-of-not-giving-a-fk-firstnbsped-9780062457714.html",
        desc: "Mark Manson presents a counterintuitive approach to living a good life, focusing on embracing challenges and letting go of societal expectations."
    },
    {
        id: 20,
        title: "Becoming",
        category: "Biography",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3rMJqOg0R4zdH4avqZfe5EpS3c_ZniY6iQ&s",
        link: "https://icrrd.com/public/media/15-05-2021-133541Becoming-Michelle-Obama.pdf",
        desc: "Michelle Obama’s memoir is an inspiring account of her life, her roots, and her time in the White House. A powerful story of a woman defining her own path."
    },
    {
        id: 21,
        title: 'Think and Grow Rich',
        category :'freeToRead',
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaoqJW3mX6WzK-XA08cYl_s4Rc92DM36_uvA&s",
        link : "https://apex.oracle.com/pls/apex/lonestar/r/files/static/v13Y/Think-And-Grow-Rich_2011-06.pdf",
        desc : "This book focuses more on the self-development. How we should use our mind and inner-resource to become much more than what can be measured by money. This book is a must-read for those who want to be successful in life."
    }
]


const sectionCenter = document.querySelector('.section-center');
const filterBtn = document.querySelectorAll(".filter-btn");


// event listener to the window//
window.addEventListener('DOMContentLoaded', ()=>{
    displayBookItems(books);
});

// functionality of filtering//
filterBtn.forEach((btn)=>{
    btn.addEventListener('click', (e) =>{
      const category = e.currentTarget.dataset.id;
      const bookCategory = books.filter( (bookItem)=>{
         if(bookItem.category === category){
            return bookItem;
         }
      });
      if(category === 'all'){
        displayBookItems(books);
      }else{
        displayBookItems(bookCategory);
      }
    });
});

const displayBookItems = (bookItems) =>{
    let displayBook = bookItems.map((item) =>{
        return `<article class="book-item">
            <img src =${item.img} alt=${item.title} class="photo">
            <div class="item-info">
                <header>
                     <a class="link" href=${item.link} target="_blank">${item.title}</a>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>`
    });
    displayBook = displayBook.join('');
    sectionCenter.innerHTML = displayBook;
}





