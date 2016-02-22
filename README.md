## Steps to run the application

**1.** Install (if not) `Java 8` and `Gradle`

**2.** Move to [assignment][1] directory and run the `gradle wrapper` command `sh gradlew clean jRW` - It build and deploy          the project on `Jetty` running on port `8080`

**3.** Access application at: `http://localhost:8080/assignment`


## REST API Calls


**1. Create new company**

 `HTTP POST Request URL:` http://localhost:8080/assignment/company/create

 `Content-Type:` application/json

 `HTTP Request Payload:`
  {
  "name": "Company5",
  "address": "Building 7\/12, DLF",
  "city": "Gurgaon",
  "country": "India",
  "email": "aggarwalarpit.89@gmail.com",
  "phoneNumber": "9090909090",
  "owners": [
    "You",
    "Me"
  ]
  }

**2. Get a list of all companies**

 `HTTP GET Request URL:` http://localhost:8080/assignment/company/get

**3. Get details about a company**
 
 `HTTP GET Request URL:` - http://localhost:8080/assignment/company/get/company?filter=company-name, **for example:**       
  http://localhost:8080/assignment/company/get/company?filter=Company1

**4. Able to update a company**

 `HTTP POST Request URL:` http://localhost:8080/assignment/company/update
 
 `Content-Type:` application/json
 
 `HTTP Request Payload:`
  {
  "name": "Company5",
  "address": "Building 7\/12, DLF",
  "city": "Delhi",
  "country": "India",
  "email": "aggarwalarpit.89@gmail.com",
  "phoneNumber": "9090909090",
  "owners": [
    "You",
    "Me"
  ]
  }

**5. Able to add beneficial owner(s) of the company**  

 `HTTP POST Request URL` - http://localhost:8080/assignment/company/add-owners/?companyName=company-name&owners=list-of-owners, **for example:** http://localhost:8080/assignment/company/add-owners/?companyName=Company1&owners=A,B

[1]: https://github.com/arpitaggarwal/assignment
