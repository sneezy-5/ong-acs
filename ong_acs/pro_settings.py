from .settings import *
import dj_database_url


SECRET_KEY = '2fut8887t6^qr1uod-$4_#0&0o&b8%6=(j=p9rm1md4v_@!b_q'

DEBUG = True
DATABASES['default'] = dj_database_url.config()

MIDDLEWARE += 'whitenoise.middleware.WhiteNoiseMiddleware',

STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'

ALLOWED_HOSTS = ['ong-acs.herokuapp.com']

