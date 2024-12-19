## Challenge Description  
In this challenge, you will learn about the **Substitution Cipher**! A substitution cipher is a method of encryption where each letter in the plaintext is replaced by another letter according to a substitution key. This key maps each letter of the alphabet to a unique counterpart, ensuring that no two letters share the same substitution.  

Substitution ciphers have been used historically for secret communication and remain a foundational concept in cryptography.  

### How It Works:  
**Substitution Key:** The key to a substitution cipher is the mapping between the original alphabet and the substituted alphabet. 
This key can be random or based on a secret word/pattern. For example:  

```
   Original: A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  
Substituted: Q  W  E  R  T  Y  U  I  O  P  A  S  D  F  G  H  J  K  L  Z  X  C  V  B  N  M
```  

Each letter in the original alphabet is replaced by its counterpart in the substitution key. For example:  
- A becomes Q  
- B becomes W  
- C becomes E  

**Encryption:** To encrypt a message, replace each letter in the plaintext with the corresponding letter from the substitution key. For instance, using the key above, the word **HELLO** becomes **ITSSG**.  

**Decryption:** To decrypt the message, reverse the process by finding the original letter for each substituted letter. For example, **ITSSG** maps back to **HELLO**.  

While the substitution cipher offers more complexity than the Caesar cipher because the mapping of letters is not limited to a simple shift, it is still not secure by modern standards. It can be broken using **frequency analysis**, where common letters and patterns in the ciphertext are compared to typical letter frequencies in the language.  

## Challenge Steps
1. Start the challenge
2. Run `verify`
3. Follow the instructions given in `verify` to encrypt a secret word and get the flag!
