# TesSoedja

This apllication is deployed on heroku
`https://tessoedja.herokuapp.com/api/`

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Feature](#feature)
- [Stack Used](#stack-used)

## Getting Started

Before starting to install the project, there're some things that need to be done first.

## Prerequisites

Make sure all of these are properly installed in your system.

| Application | Download                                                                            |
| ----------- | ----------------------------------------------------------------------------------- |
| Git         | [Windows](https://gitforwindows.org/) / [Linux](https://git-scm.com/download/linux) |
| Node.js     | [Link](https://nodejs.org/en/download/)                                             |
| MongoDB     | [Link](https://www.mongodb.com/)                                                    |

## Installation

First, clone this repository into your system or you can run it from heroku.
To clone clone this repository `https://github.com/hasbimsdd27/TesSoedja`

To run it from heroku use this `https://tessoedja.herokuapp.com/api/`
If you clone this repository, after clone finish run `npm i` to install the dependencies

## Feature

In this app there are some endpoint that available

1.  FindAll Product

    To show all product use this endpoint `https://tessoedja.herokuapp.com/api/products?currentPage=1&pageSize=2` using method `GET`

    The value of currentPage and pageSize can be changed depend on you

    this is the example

    #### Request

    <img src="screenshot/screenshot(17).jpg" />

    #### Response

    <img src="screenshot/screenshot(18).jpg" />

2.  Create Product

    To create product use this endpoint `https://tessoedja.herokuapp.com/api/products/new` using method `POST`

    The request body must be JSON using following format :

    {
    "name":....,
    "description":....,
    "price":...
    }

    this is the example

    #### Request

    <img src="screenshot/screenshot(10).jpg" />

    #### Response

    <img src="screenshot/screenshot(12).jpg" />

    #### Response (if not a seller)

    <img src="screenshot/screenshot(11).jpg" />

3.  Inquiry Product (Create Invoice)

    To Inquiry product use this endpoint `https://tessoedja.herokuapp.com/api/invoices/inq` using method `POST`

    The request body must be JSON using following format :

    {
    "product_list": ...,
    "total_price": ...
    }

    this is the example

    #### Request

    <img src="screenshot/screenshot(13).jpg" />

    #### Response

    <img src="screenshot/screenshot(14).jpg" />

4.  Payment Product

    To pay product use this endpoint `https://tessoedja.herokuapp.com/api/invoices/pay` using method `PATCH`

    The request body must be JSON using following format :

    {
    "invoice": ...,
    "status": ... enum['paid', 'pending']
    }

    this is the example

    #### Request

    <img src="screenshot/screenshot(15).jpg" />

    #### Response

    <img src="screenshot/screenshot(16).jpg" />

5.  Register

    To register new user use this endpoint `https://tessoedja.herokuapp.com/api/users/register` using method `POST`

    The request body must be JSON using following format :

    {
    "username" : ...,
    "password" : ...,
    "isSeller" : ... Boolean(True,False)
    }

    when user is registered, response will give the token from JSON Web Token. To use this, insert the token to the Authorization then chhose Bearer Token

    this is the example

    #### Request

     <img src="screenshot/screenshot(4).jpg" />

    #### Response

     <img src="screenshot/screenshot(5).jpg" />

    #### Insert Token

     <img src="screenshot/screenshot(19).jpg" />

6.  Login

    To login use this endpoint `https://tessoedja.herokuapp.com/api/users/login` using method `POST`

    The request body must be JSON using following format :

    {
    "username" : ... ,
    "password" : ...
    }

    when user is login, response will give the token from JSON Web Token. To use this, insert the token to the Authorization then chhose Bearer Token

    this is the example

    #### Request

     <img src="screenshot/screenshot(8).jpg" />

    #### Response

     <img src="screenshot/screenshot(9).jpg" />

    #### Insert Token

     <img src="screenshot/screenshot(19).jpg" />

## Stack Used

to build this app, stack that used is mentioned below

| Application   | Download                                            |
| ------------- | --------------------------------------------------- |
| Node.js       | [Link](https://nodejs.org/en/download/)             |
| MongoDB       | [Link](https://www.mongodb.com/)                    |
| Bcrypt        | [Link](https://www.npmjs.com/package/bcrypt)        |
| Cors          | [Link](https://www.npmjs.com/package/cors)          |
| dotenv        | [Link](https://www.npmjs.com/package/dotenv)        |
| express       | [Link](https://www.npmjs.com/package/express)       |
| jsonwebtoken  | [Link](https://www.npmjs.com/package/jsonwebtoken)  |
| mongoose      | [Link](https://www.npmjs.com/package/mongoose)      |
| paginate-info | [Link](https://www.npmjs.com/package/paginate-info) |
