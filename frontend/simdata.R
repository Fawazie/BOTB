install.packages("ggplot2")  # If not installed
library(ggplot2)
library(dplyr)  # For data manipulation

# Load required libraries
library(tidyverse)

# Set seed to ensure consistent random values
set.seed(123)

# Define the number of customers to simulate
num_customers <- 100

# Generate unique user IDs
User_ID <- seq(1, num_customers)

# Generate random Age
Age <- sample(18:70, num_customers, replace = TRUE)

# Generate Gender distribution
Gender <- sample(c("Male", "Female", "Non-binary"), num_customers, replace = TRUE, prob = c(0.45, 0.45, 0.1))

# Generate random Locations
Location <- sample(c("New York", "Los Angeles", "Chicago", "Houston", "San Francisco"), num_customers, replace = TRUE)

# Generate random Income levels
Income <- sample(seq(20000, 120000, by = 5000), num_customers, replace = TRUE)

# Generate Education levels
Education <- sample(c("High School", "Bachelor's", "Master's", "PhD"), num_customers, replace = TRUE)

# Generate Occupations
Occupation <- sample(c("Engineer", "Teacher", "Doctor", "Artist", "Entrepreneur", "Student"), num_customers, replace = TRUE)

# Browsing and purchase behavior
Browsing_History <- sample(c("Tech", "Fashion", "Sports", "Finance", "Entertainment"), num_customers, replace = TRUE)
Purchase_History <- sample(0:10, num_customers, replace = TRUE)
Cart_Abandonment <- sample(0:5, num_customers, replace = TRUE)
Page_Views <- sample(1:50, num_customers, replace = TRUE)
Clicks <- sample(1:100, num_customers, replace = TRUE)
Time_Spent <- round(runif(num_customers, min = 1, max = 60), 1)

# Psychographic segmentation
Personality <- sample(c("Introvert", "Extrovert", "Ambivert"), num_customers, replace = TRUE)
Values <- sample(c("Sustainability", "Innovation", "Community", "Luxury"), num_customers, replace = TRUE)
Attitudes <- sample(c("Brand Loyal", "Discount Seeker", "Impulse Buyer", "Eco-conscious"), num_customers, replace = TRUE)
Interest <- sample(c("Gaming", "Cooking", "Travel", "Reading", "Music"), num_customers, replace = TRUE)
Lifestyle <- sample(c("Active", "Relaxed", "Balanced"), num_customers, replace = TRUE)

# Device & Environment
Device <- sample(c("Mobile", "Desktop", "Tablet"), num_customers, replace = TRUE)
Browser <- sample(c("Chrome", "Firefox", "Safari", "Edge"), num_customers, replace = TRUE)
Location_Geo <- sample(c("Urban", "Suburban", "Rural"), num_customers, replace = TRUE)
Weather <- sample(c("Sunny", "Rainy", "Cloudy", "Snowy"), num_customers, replace = TRUE)
Season <- sample(c("Winter", "Spring", "Summer", "Fall"), num_customers, replace = TRUE)

User_Segmentation <- sample(c("Frequent Buyer", "One-time Buyer", "Window Shopper"), num_customers, replace = TRUE)
Browsing_Patterns <- sample(c("Quick Browsing", "Detailed Research", "Frequent Visits"), num_customers, replace = TRUE)

# Create a dataframe
customer_data <- tibble(
  User_ID, Age, Gender, Location, Income, Education, Occupation,
  Browsing_History, Purchase_History, Cart_Abandonment, Page_Views, Clicks, Time_Spent,
  Personality, Values, Attitudes, Interest, Lifestyle,
  Device, Browser, Location_Geo, Weather, Season,
  User_Segmentation, Browsing_Patterns
)

# Display the first few rows
print(head(customer_data))

# Save the simulated dataset to a CSV file
write.csv(customer_data, "Simulated_Customer_Data.csv", row.names = FALSE)
