document.getElementById('error-message1').style.display = 'none'
document.getElementById('error-message2').style.display = 'none'

const loadBook = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value 
    console.log(searchText)
    searchField.value = ''
    document.getElementById('error-message2').style.display = 'none'
    if(searchText == ''){
        document.getElementById('error-message2').style.display = 'block'
    }else {
        const url = `
        http://openlibrary.org/search.json?q=${searchText}
    `
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data.docs))
    }
        
}
    
const displayBook = books => {
    const bookElement = document.getElementById('search-result')
    console.log(books)
    document.getElementById('error-message1').style.display = 'none'
    if(books.length === 0) {
        document.getElementById('error-message1').style.display = 'block'
    }
    else {
        for(const book of books){
            console.log(book.title)
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
            <div class="card">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Author: ${book.author_name}</p>
                    <p class="card-text">First Publish Year: ${book.first_publish_year}</p>
                </div>
            </div>
            `;
            bookElement.appendChild(div)
    
        }
    }
    
    
}

// ${book.title}554106