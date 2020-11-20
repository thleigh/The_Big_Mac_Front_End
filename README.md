# The Big Mac Project
Economic theory states that in a world of international trade and market competition, prices for the same good in one country should be the same in another country, all else equal, otherwise known as purchasing power parity, or "PPP". However, In the real world, the assumptions built into the law of one price frequently do not hold, and persistent differentials in prices for many kinds of goods and assets can be readily observed. 
The same holds for the price of the `McDonald's Big Mac`.

The Big Mac Project finds the price of every Mcdonald's Big Mac meal across the United States.

Through this, `The Big Mac Project was able to find the large price differences of Mconald's across America`. However, how does this relate to things outside of Mcdonalds? Does it accurately reflect the rest of the state's cost of living? What more can this data reveal?

## What is the price of the Big Mac meal in your city? and what does that price say about where you live?

<br>

# Features

- Every user will be greeted with a daily inspirational/affirming quote. Users can save quotes to their profile by liking and submit quotes of their own.

-  Users will have access to the suicide prevention hotline and find professional help in their area. If they feel intimidated to do so, users can chat with other users for more personal advice.

# Technologies

- The Big Mac Project is uses a `React` front end and a `MongoDB` backend. The data is stored in our Mongo database and called using `Axios`.

- We were able to pull data from Doordash in order to find the prices of each Big Mac meal.

- We created a `Selenium` bot that searched through every major city on  Doordash. 

- `React-Bootstrap` is used for Modals and `React-USA-Map` is used for the responsive map of the US.

# Highlights

Below is the code used to show the data for each states Big Mac meal price.

``` javascript
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>City</th>
            <th>State</th>
            <th>Big Mac Meal Price</th>
            </tr>
        </thead>
        <tbody>
        {main.map((bigmac, index) => (
            <tr key={index}>
                <td>#</td>
                <td> {bigmac.location.split(',')[0]}td>
                <td> {bigmac.location.split(',')[1]}td>
                <td> ${bigmac.price} </td>
            </tr>
        ))}
        </tbody>
    </Table>
```

Below is how the data is fetched from our Mongo database using `axios`.
``` javascript
    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/`)
        .then(response => {
            setMain(response.data)
        })
        .catch(err => console.log(err))
    }, [])
```

# Conclusion
