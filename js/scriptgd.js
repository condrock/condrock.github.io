(function($) {
    $(function() {
        var $shareLink = $('#sharelink'),
            $downloadLink = $('#downloadlink'),
            $copyButton = $('#copylinkbtn');

        // Event untuk mengubah link
        $shareLink.on('keyup paste', function() {
            var link = $shareLink.val(),
                l = link.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=download&id=$1");

            if (l !== link) {
                $downloadLink.val(l);
                $copyButton.removeAttr('disabled');
            } else {
                $downloadLink.val('');
                $copyButton.attr('disabled', 'disabled');
            }
        });

        // Pilih teks ketika diklik
        $downloadLink.on('click', function() {
            $downloadLink.select();
        });

        // Hapus event listener sebelumnya untuk mencegah duplikasi
        $copyButton.off('click');

        // Hapus Clipboard instance jika sudah ada untuk menghindari event ganda
        if ($copyButton.data("clipboardInstance")) {
            $copyButton.data("clipboardInstance").destroy();
        }

        // Inisialisasi Clipboard.js
        var clipboard = new Clipboard('#copylinkbtn');

        // Simpan instance Clipboard.js di elemen tombol
        $copyButton.data("clipboardInstance", clipboard);

        // Hapus event listener sebelumnya untuk memastikan tidak ada duplikasi
        clipboard.off('success');

        clipboard.on('success', function(e) {
            e.clearSelection(); // Pastikan event tidak terjadi dua kali
            
            // Cegah duplikasi notifikasi
            $('.alert-success').remove(); 

            $.notify({
                icon: 'glyphicon glyphicon-ok-circle',
                title: 'Tautan berhasil disalin:',
                message: e.text
            }, {
                type: "success",
                placement: {
                    from: "top",
                    align: "center"
                }
            });
        });

    });
})(jQuery);
