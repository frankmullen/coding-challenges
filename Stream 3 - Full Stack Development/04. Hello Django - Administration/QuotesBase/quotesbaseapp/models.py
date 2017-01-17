from django.db import models

class Quote(models.Model):

    class Meta:
        app_label = "quotesbaseapp"

    author_first_name = models.CharField(max_length=255)
    author_last_name = models.CharField(max_length=255)
    quote = models.CharField(max_length=1000)

    def __str__(self):
        return ' '.join([
            self.author_first_name,
            self.author_last_name,
            " (\""+ self.quote[:40] + "... \")",
        ])