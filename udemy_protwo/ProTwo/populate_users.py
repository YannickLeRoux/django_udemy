import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','ProTwo.settings')

import django
django.setup()

# FAKE POP SCRIPT

from appTwo.models import User
from faker import Faker

fakegen = Faker()


def populate(N=5):
    for entry in range(N):
        fake_fname = fakegen.first_name()
        fake_lname = fakegen.last_name()
        fake_email = fakegen.email()

        user_entry = User.objects.get_or_create(user_fname=fake_fname,
                user_lname=fake_lname,user_email=fake_email)[0]


if __name__ == "__main__":
    print('Populating Script!')
    populate(20)
    print('Populating Complete!')
