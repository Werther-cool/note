/etc/nginx/nigix.conf

 server
  {
    listen 8053;
    root  /home/admin/deploy/web/dtplatform-web;

    location /apis {
            rewrite  ^.+apis/?(.*)$ /$1 break;
            include  uwsgi_params;
        }

    location / {
        index  index.html;
        try_files $uri $uri/ /index.html;
    }
}