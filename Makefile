.PHONY: index.css

index.css:
	python3 generate-styles.py > $@
	cat $(wildcard styles/*.css) >> $@
