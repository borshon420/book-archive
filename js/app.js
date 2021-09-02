// error handle
document.getElementById('error-message1').style.display = 'none'
document.getElementById('error-message2').style.display = 'none'

// This function will work for search input
const loadBook = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value 
    searchField.value = ''
    document.getElementById('error-message2').style.display = 'none'
    if(searchText === ''){
        document.getElementById('error-message2').style.display = 'block'
    }else {
        const url = `
        http://openlibrary.org/search.json?q=${searchText}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data.docs))
    }
        
}

//This function will work to show search result
const displayBook = books => {
    const bookElement = document.getElementById('search-result')
    bookElement.textContent = ''
    document.getElementById('error-message1').style.display = 'none'
    if(books.length === 0) {
        document.getElementById('error-message1').style.display = 'block'
    }
    else {
        books.forEach(book => {
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
        })
        
    }
    
    
}
