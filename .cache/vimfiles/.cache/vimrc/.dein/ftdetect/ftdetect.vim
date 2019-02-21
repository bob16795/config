" File:        todo.txt.vim
" Description: Todo.txt filetype detection
" Author:      Leandro Freitas <freitass@gmail.com>
" License:     Vim license
" Website:     http://github.com/freitass/todo.txt-vim
" Version:     0.1

autocmd BufNewFile,BufRead [Tt]odo.txt set filetype=todo
autocmd BufNewFile,BufRead *.[Tt]odo.txt set filetype=todo
autocmd BufNewFile,BufRead [Dd]one.txt set filetype=todo
autocmd BufNewFile,BufRead *.[Dd]one.txt set filetype=todo

" Detect vimshell rc file.
autocmd BufNewFile,BufRead *.vimsh,.vimshrc,vimshrc set filetype=vimshrc
" Detect syntax file.
autocmd BufNewFile,BufRead *.snip,*.snippets set filetype=neosnippet
