# SIH 2022

## Inspiration
Nowadays almost every other application has SMS OTP as their secondary authentication. Particularly after the arrival of Aadhar in India most of the government sites have Aadhar verification which is done through SMS OTP. But the issue with this method is most of the time we don't receive the OTP either due to cellular network or heavy server traffic. We are trying to come up with a solution that can replace conventional SMS OTP and can work even in areas with no cellular network.
## What it does
Our mobile application generates OTP in areas with no cellular area using an Algorithm that we have developed. You can use our app to connect as many as government websites as you want and generated unique OTP for each of these platforms without the need of internet/cellular signal.
## How we built it
Our algorithm consists of a couple of Cryptographic functions and Encryption algorithms which will generate a sequence of codes from which we calculate the OTP using another set of Hash keys.
## Challenges we ran into
We weren't aware of the Cryptographic algorithms and Encryption process. So it took us a lot of time to come up with a unique solution.
## Accomplishments that we're proud of
We developed a mobile application and a REST API for the OTP generation flow and also came up with a dummy website to show the sequential connection of the government website with our mobile application in 30 hours.
## What we learned
We learned a lot about HMAC,SHA1,Encryption processes and how they work in the real core.
## What's next for OffTP
Instead of depending upon Algorithms invented by other countries, we can come up with our very own Algorithm for protecting our data and use them to secure government records.
