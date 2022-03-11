from django.db import models
from user.models import user
from forum.models import forum

# Create your models here.
class chatMessage(models.Model):
    id = models.AutoField(verbose_name='聊天信息编号', primary_key=True)
    content = models.TextField(verbose_name='消息内容')
    receiver = models.ForeignKey(user, on_delete=models.CASCADE, verbose_name='接收人')
    sender = models.ForeignKey(user, on_delete=models.CASCADE, verbose_name='发送人')
    messageForum = models.ForeignKey(forum, verbose_name='发布论坛')
    postTime = models.DateTimeField(verbose_name='发送时间', auto_now_add=True)
    class Meta:
        db_table = 'chat_chatMessage'