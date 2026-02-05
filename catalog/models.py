import wordle
from django.db import models


# 1. [5word, 5word, 5word, 5word, 5word, 5word]
class word(models.Model):
    word = models.CharField(max_length=5)

    def __str__(self):
        return self.word
    
    @classmethod
    def get_five_words(cls):
        """Returns a list of 5 random 5-letter words"""
        return list(cls.objects.filter(word__regex=r'^.{5}$')[:5])
    

class user_stats(models.Model):
    user_name = models.CharField(max_length=200)
    games_played = models.IntegerField(default=0)
    games_won = models.IntegerField(default=0)

    def __str__(self):
        return self.user_name
    
class letters(models.Model):
    letter = models.CharField(max_length=1)
    count = models.IntegerField(default=0)

    def __str__(self):
        return self.letter