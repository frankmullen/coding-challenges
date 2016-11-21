# Challenge

- Open up IDLE and create a new file. Save it as vacation.py.
- Add the code below to the file – you’ll remember it from Codecademy.
- What’s missing in the code is the call to one of the functions that runs the whole program. Add that function call and pass in the expected function arguments. Remember, if passing a string as an argument, you must use single or double quotes around the text.
- Once you have the code in place, save and hit F5 to watch your code run in all its glory.

```python
def hotel_cost(nights):
    return 140 * nights
 
def plane_ride_cost(city):
    if city == "Charlotte":
        return 183
    elif city == "Tampa":
        return 220
    elif city == "Pittsburgh":
        return 222
    elif city == "Los Angeles":
        return 475
 
def rental_car_cost(days):
    total_car = days * 40
    if days >= 7:
       total_car -= 50
    elif days >= 3:
        total_car -= 20
    return total_car
 
def trip_cost(city, days):
    return rental_car_cost(days) + plane_ride_cost(city) + hotel_cost(days)
 
#invoke function here
```