#!/usr/bin/env python
import csv
import logging
import pathlib
import re
import sys
import yaml

from clinner.command import command, Type as CommandType
from clinner.inputs import bool_input
from clinner.run.main import Main

logger = logging.getLogger("cli")


@command(command_type=CommandType.PYTHON,
         args=(
             (("path",), {"help": "LinkedIn backup directory path"}),
             (("-o", "--output"), {"default": "linkedin.yaml", "help": "Output file"})
         ),
         parser_opts={"help": "Parse LinkedIn backup data"})
def linkedin(*args, **kwargs):
    data = {} 
    for p in pathlib.Path(kwargs["path"]).glob("*.csv"): 
        if bool_input(f"Parse {p}?"):
            logger.info("Parsing %s", p)
            with p.open() as f: 
                try: 
                    reader = csv.DictReader(f) 
                    data[re.sub(r"[ _]", "-", p.stem.lower())] = [{re.sub(r"[ _]", "-", k.lower()): re.sub(r"  ", "\n\n", v) for k, v in row.items()} for row in reader]
                except: 
                    logger.error("Error parsing file: %s", p)

        with open(kwargs["output"], "w") as f:
            f.write(yaml.dump(data))


if __name__ == "__main__":
    sys.exit(Main().run())
