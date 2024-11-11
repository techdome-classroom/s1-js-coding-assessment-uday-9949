import re

def decode_message(s: str, p: str) -> bool:
    # Replace ? with . (single character wildcard) and * with .* (zero or more characters)
    p = p.replace("?", ".").replace("*", ".*")
    
    # Match the entire pattern with the message
    return bool(re.fullmatch(p, s))
