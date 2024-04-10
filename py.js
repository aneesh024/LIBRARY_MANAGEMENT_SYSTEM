// Sample book data with cover image URLs
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', category: 'Category 1', cover: 'https://via.placeholder.com/100' },
    { id: 2, title: 'Book 2', author: 'Author 2', category: 'Category 2', cover: 'https://via.placeholder.com/100' }
];

// Function to display books with cover images
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${book.cover}" alt="Book Cover" class="book-cover"></td>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
        `;
        bookList.appendChild(row);
    });
}

// Function to add a new book (button click event)
document.getElementById('addBookBtn').addEventListener('click', function() {
    const newBook = {
        id: books.length + 1,
        title: `Book ${books.length + 1}`,
        author: `Author ${books.length + 1}`,
        category: `Category ${books.length + 1}`,
        cover: 'https://via.placeholder.com/100'
    };
    books.push(newBook);
    displayBooks();
});

// Function to search for a book (button click event)
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
    });
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${book.cover}" alt="Book Cover" class="book-cover"></td>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
        `;
        bookList.appendChild(row);
    });
});

// Display initial books
displayBooks();
