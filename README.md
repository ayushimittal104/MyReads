# README
## MyReads

This is the project I completed for my React NanoDegree by Udacity.

### Steps to run this project
1. Clone the Repository.
2. Run npm install to install the packages written in package.json.
3. Run npm start to run the project in the browser.
4.Enter localhost:3000 in url in browser.

### Information and functionality of the project :
1. I made this project using React only.
2. I have implemented two pages- one for **Homepage** and second for **Search page** and using a Api for booklist provided by Udacity.
3. I have used Routing to link both the pages.
4. On clicking  plus sign icon at rightmost bottom on Homepage,it will take you to the Search page .
5. On clicking back arrow icon on Search Page,it will take you to the to HomePage.
6. On Homepage,I have used getAll() to fetch the booklist from the API provided and then categorised  the booklist into three categories    Currently Reading,Want To Read and Read depending on the Shelf.
7. You can change the shelf from the dropdown option and move the book to the different shelf. And the state persist even after refreshing  the page and used  update() function to save the changes to the Api.
8. On Search,we get the list of books related to the text entered in the field  using search() function of Api and if you change the      category then it will be reflected in that particular category on homepage and on the search page as well.Otherwise if shelf is not selected on books shown on search page it will show None as the default value of dropdown.
