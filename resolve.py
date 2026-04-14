import sys

with open('src/lib/utils/youtube.ts', 'r') as f:
    content = f.read()

while '<<<<<<<' in content:
    start = content.find('<<<<<<<')
    mid = content.find('=======', start)
    end = content.find('>>>>>>>', mid)

    if start == -1 or mid == -1 or end == -1:
        break

    end_newline = content.find('\n', end)
    if end_newline == -1:
        end_newline = len(content)

    # Keep our version (between <<<<<<< and =======)
    our_version = content[content.find('\n', start) + 1:mid]

    content = content[:start] + our_version + content[end_newline + 1:]

with open('src/lib/utils/youtube.ts', 'w') as f:
    f.write(content)
