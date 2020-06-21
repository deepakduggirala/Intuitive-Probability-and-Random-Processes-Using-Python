from scipy.special import comb

def geometric_probability(k,p):
    return p * ((1-p)**(k-1))

def binomial_probability(M,k,p):
    return comb(M,k) * (p**k) * ((1-p)**(M-k))