from django.db import models
from pyrsistent import v
from user.models import user
from forum.models import forum

# Create your models here.
class notice(models.Model):
    id = models.AutoField(verbose_name='通知编号', primary_key=True)
    content = models.TextField(verbose_name='通知内容')
    receiver = models.ForeignKey(user, verbose_name='接收人',related_name='接收人')
    sender = models.ForeignKey(user, verbose_name='发布人', related_name='发送人')
    created_time = models.DateTimeField(verbose_name='发送时间', auto_now_add=True)
    class Meta:
        db_table = 'notify_notice'
