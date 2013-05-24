# `make dist` to package for distribution, deps do the rest
dist: dist/html.min.js

# assuming your main source file lives at `awesome_lib.js` in the project root
dist/html.js: lib/html.js
	browserify --standalone htmllang --outfile $@ $<

# minification courtesy of googlz
dist/html.min.js: dist/html.js
	curl --data-urlencode "js_code@$<" \
		-d "output_info=compiled_code&compilation_level=SIMPLE_OPTIMIZATIONS" \
		http://closure-compiler.appspot.com/compile > $@

clean:
	rm -f dist/html.js dist/html.min.js
