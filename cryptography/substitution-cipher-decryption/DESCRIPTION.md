## Challenge Description
This challenge will require you to _decrypt_ a word! 

### How It Works:

**Substitution Key:** Just like with encrypting, the substitution key is used to map the original alphabet and the substituted alphabet.
This time, to decrypt a message, we find the substituted letter on the _bottom_ row, and replace it with the original letter that is directly above it. 
For example:

```
   Original: A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  
Substituted: Q  W  E  R  T  Y  U  I  O  P  A  S  D  F  G  H  J  K  L  Z  X  C  V  B  N  M
```

- Q becomes A
- P becomes J
- M becomes Z


**Decryption:** To decrypt the message, replace the substituted letters with the original letters.

## Challenge Steps
1. Start the challenge
2. Run `verify`
3. Follow the instructions given in `verify` to decrypt a secret word and get the flag!
